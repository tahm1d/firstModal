const trigger = document.querySelector(".trigger");
const close = document.querySelector(".close");
const modalEl = document.querySelector(".modal");

function main()
{
    trigger.addEventListener("click", function()
    {
        modalEl.classList.add("open");
    });

    close.addEventListener("click", function()
    {
        modalEl.classList.remove("open");
    });

    window.addEventListener("click", function(event)
    {
        if(event.target===modalEl)
        {
            modalEl.classList.remove("open");

        }
    });
}

main();