function appendToResult(value)
{

    document.getElementById("result").value += value;

}
  
function clearResult() 
{

    document.getElementById("result").value = "";

}
  
function calculate() 
{
    try 
    {
      
        document.getElementById("result").value = eval(document.getElementById("result").value);

    } catch (error) {
      
        document.getElementById("result").value = "Error";

    }
}
  
function backspace() 
{

    var result = document.getElementById("result").value;

    document.getElementById("result").value = result.substring(0, result.length - 1);

}
  
