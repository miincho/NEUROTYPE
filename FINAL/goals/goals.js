var title = "Wet Dreams";
var author = "S.B."

var txt = "When I had my first wet dream. At the age of 20. I was able to swallow him whole – without pinching my insides. I felt uncomfortable but I knew it was good for me. I fantasize about straight guys hardcore, its stupid but helps me reclaim a tiny bit of the power that patriarchy takes away from me. I’m not going to apologize for that, ever. I get the chance to strip them of their subjecthood, treat them like objects of my fantasy. In this minute circumstance I am able to control what traumatizes me. That creamy sweet feeling escaping me. The smoothness of my thoughts taking a very direct physical form – kinda ontological. a pulsating release, delicate attachments releasing – an awkward first auto-orgasm."

var txt_array = txt.split(" ");

var padding = 100;
var i = 0;
var speed = 350;

var currRotateV = 0;
var currRotateH = 0;

var tv;
var th;

StartAudioContext(Tone.context, window);
$(window).click(function(){
    Tone.context.resume();
});

  
function displayTitle(title, author){
    $("#title").html(title + "<br> by " + author);
    setTimeout(() => {
        $("#title").hide();
    }, 2500);
}

function textCycle(){
    var randNote = Math.floor(Math.random() * notes.length);
    synth.triggerAttackRelease(notes[randNote], "1n");

    var word = txt_array[i];
    updateField(word);
    var metrics = getTextWidth(word, "180px arial");
    var scaleXFactor = (window.innerWidth - padding) / metrics.width;
    var scaleYFactor = (window.innerHeight - padding) / (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);
    if(metrics.actualBoundingBoxAscent == null){
        scaleYFactor = (window.innerHeight - padding) / 180;
    }
    $("#center").text(word);
    var scales = [scaleXFactor, scaleYFactor]
    $("#center").transition({scale: scales}, 300);
    // $("#center").css({
    //     "-webkit-transform": `scale(${scaleXFactor}, ${scaleYFactor})`,
    //     "-moz-transform": `scale(${scaleXFactor}, ${scaleYFactor})`,
    //     "-o-transform": `scale(${scaleXFactor}, ${scaleYFactor})`,
    //     "transform": `scale(${scaleXFactor}, ${scaleYFactor})`,
    // });
    var syllables = RiTa.getSyllables(word);
	var syllables_arr = syllables.split("/");
    var time = syllables_arr.length * speed;
    i++;

    if (word.charAt(word.length - 1) == '.'){
        time += speed;
    }
    if(i < txt_array.length){
        setTimeout(textCycle, time);
    }

}

