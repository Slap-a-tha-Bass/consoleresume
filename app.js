let resume = {
    Name: 'Corey DeLoach',
    Career: 'Wannabee Developer',
    Description: 'I try to know a little about a lot!',
    Interests:  'Piano, Woodworking, Chess, and Gardening',
    Experience: ['Company: Nashville Chemical', 'Position: Sales Representative', 'Duties: Chemical Water Service and Sales'],
    Skills: ['Coffee Making', 'Salad Making', 'Love Making', 'Riding bike with no handlebars']
}
console.log(resume.Name.toUpperCase());

function displayPosition () {
    console.log(resume.Experience[0]);
    console.log(resume.Experience[1]);
    console.log(resume.Experience[2]);
}
displayPosition ();

function displaySkill () {
    
    for (i = 0; i < resume.Skills.length; i++) {
        let skill = resume.Skills[i];
        if (i < 3) {
            console.log('BAM: ' + skill);
        }else{
            console.log(skill);
        }
    }

}
displaySkill ();
