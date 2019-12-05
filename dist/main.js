const renderer = new Renderer;

$('#btn').on('click', function () {
    let ing = $('#ingInput').val();
    $.get(`/recipes/${ing}`, (data) => {
        renderer.render(data);
    })
})

$('.recipeContainer').on('click', 'img', function(){
    console.log($(this).closest('div').find('li').first().text())
})