
$('#btn').on('click', function () {
    let ing = $('#ingInput').val();
    $.get(`/recipes/${ing}`, (data) => {
        render(data);
    })
})

const source = $('#recipeTemplate').html();
const template = Handlebars.compile(source);

let render = function (data) {
    const newHtml = template(data);
    $('.recipeContainer').append(newHtml);
}
