class Renderer {

    _render(data) {
        const source = $('#recipeTemplate').html();
        const template = Handlebars.compile(source);
        const newHtml = template(data);
        $('.recipeContainer').empty().append(newHtml);
    }

    render(data) {
        this._render(data);
    }
}