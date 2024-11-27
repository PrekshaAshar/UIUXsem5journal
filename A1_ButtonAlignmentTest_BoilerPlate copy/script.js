const alignmentDescriptions = {
    lawfulGood: "Lawful Good: Upholds the law for the greater good.",
    neutralGood: "Neutral Good: Acts for good without bias towards law or chaos.",
    chaoticGood: "Chaotic Good: Freedom and kindness, with little regard for the rules.",
    lawfulNeutral: "Lawful Neutral: Follows the law strictly, regardless of moral good or evil.",
    trueNeutral: "True Neutral: Seeks balance between all forces, remaining impartial.",
    chaoticNeutral: "Chaotic Neutral: Acts according to personal whims, unconcerned with law or morality.",
    lawfulEvil: "Lawful Evil: Uses the law to impose cruelty and domination.",
    neutralEvil: "Neutral Evil: Does whatever it takes to achieve their own goals, with no loyalty to law or chaos.",
    chaoticEvil: "Chaotic Evil: Spreads destruction and chaos purely for personal gain or enjoyment."
};


//document.querySelectorAll('.ripple').forEach(button => {
    //button.addEventListener('click', function (e) {
       // const alignment = this.id; 
       // const description = alignmentDescriptions[alignment]; 

        
       // document.getElementById('reactionText').textContent = description;

        
        
   // });
//});


const reactions = {
    lawfulGood: "Lawful Good: You believe in justice, law, and doing what's right.",
    neutralGood: "Neutral Good: You prioritize goodness but do not enforce law or chaos.",
    chaoticGood: "Chaotic Good: You believe in doing good, but rules are meant to be broken.",
    lawfulNeutral: "Lawful Neutral: You follow the law regardless of morality.",
    trueNeutral: "True Neutral: You seek balance, avoiding extremes.",
    chaoticNeutral: "Chaotic Neutral: You follow your whims and value freedom.",
    lawfulEvil: "Lawful Evil: You use the law for personal gain, disregarding morality.",
    neutralEvil: "Neutral Evil: You are indifferent to law and only care about self-gain.",
    chaoticEvil: "Chaotic Evil: You thrive in chaos and seek to destroy for your own benefit."
};


function showReaction(alignment) {
    alert(reactions[alignment]); // Alert displaying the description
}


document.getElementById('lawfulGood').addEventListener('click', function() {
    showReaction('lawfulGood');
});
document.getElementById('neutralGood').addEventListener('click', function() {
    showReaction('neutralGood');
});
document.getElementById('chaoticGood').addEventListener('click', function() {
    showReaction('chaoticGood');
});
document.getElementById('lawfulNeutral').addEventListener('click', function() {
    showReaction('lawfulNeutral');
});
document.getElementById('trueNeutral').addEventListener('click', function() {
    showReaction('trueNeutral');
});
document.getElementById('chaoticNeutral').addEventListener('click', function() {
    showReaction('chaoticNeutral');
});
document.getElementById('lawfulEvil').addEventListener('click', function() {
    showReaction('lawfulEvil');
});
document.getElementById('neutralEvil').addEventListener('click', function() {
    showReaction('neutralEvil');
});
document.getElementById('chaoticEvil').addEventListener('click', function() {
    showReaction('chaoticEvil');
});

