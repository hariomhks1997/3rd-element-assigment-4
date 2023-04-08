var items=document.getElementsByClassName("list-group-item")
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold"
    if(i==2)
    {
        items[i].style.backgroundColor="green"  
    }
}