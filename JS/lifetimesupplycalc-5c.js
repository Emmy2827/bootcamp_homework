function calculateSupply(age,numPerDay)
{
    var maxAge=100;
    var totalNeeded=((numPerDay*365)*(maxAge-age));
    var message=("you will need " + totalNeeded +" cups of coffee to last you until the ripe odage of "+ maxAge)
    console.log(message);
}

calculateSupply(20,3);
calculateSupply(36,3);
calculateSupply(49,1);
