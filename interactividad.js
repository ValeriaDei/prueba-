function saludar()
{
  alert("hi, are you ready?");
}

function cambiarColor()
{
  document.body.style.backgroundColor= "#e0f7fa";
}

function hideElement(id)
{
  const vale= document.getElementById(id);
  if (vale) vale.style.display="none";
}

function showElement(id)
{
  const vale= document.getElementById(id);
  if (vale) vale.style.display="block";
}
