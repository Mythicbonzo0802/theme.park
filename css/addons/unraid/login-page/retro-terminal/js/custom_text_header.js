
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 
                         ____  _   _______   ____          ____________                                
                        / __ )/ | / /__  /  / __ \        / ____/ ____/                                
                       / __  /  |/ /  / /  / / / /       / /   / /                                     
                      / /_/ / /|  /  / /__/ /_/ /  _    / /___/ /___                                   
    ____  _   _______/_____/_/ |_/_ /____/\____/  (_)   \____/\____/_   _____                          
   / __ )/ | / /__  /  / __ \   / / / /___  ______________ _(_)___/ /  / ___/___  ______   _____  _____
  / __  /  |/ /  / /  / / / /  / / / / __ \/ ___/ ___/ __ `/ / __  /   \__ \/ _ \/ ___/ | / / _ \/ ___/
 / /_/ / /|  /  / /__/ /_/ /  / /_/ / / / / /  / /  / /_/ / / /_/ /   ___/ /  __/ /   | |/ /  __/ /    
/_____/_/ |_/  /____/\____/   \____/_/ /_/_/  /_/   \__,_/_/\__,_/   /____/\___/_/    |___/\___/_/     
                                                                                                       
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
