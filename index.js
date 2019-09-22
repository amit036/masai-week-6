var matchDetailsArr=[];
var team1Players = [];
var team2Players = [];
var team1BatArr = [];
var team2BatArr = [];
var team1BallArr = [];
var team2BallArr = [];
class Match{
    constructor(team1,team2,team1Players,team2Players,tossWon,chooseWonToss,format,team1BatArr,team2BatArr,team1BallArr,team2BallArr)
    {
        this.team1=team1;
        this.team2=team2;
        this.team1Players=[team1Players];
        this.team2Players=[team2Players];
        this.team1BatArr=[team1BatArr];
        this.team2BatArr=[team2BatArr];
        this.team1BallArr=[team1BallArr];
        this.team2BallArr=[team2BallArr];
        this.tossWon=tossWon;
        this.chooseWonToss=chooseWonToss;
        this.format=format;
    }
}
class Players{
    constructor(name,spec,pos){
        this.name=name;
        this.spec=spec;
        this.pos=pos;
    }

}
class TeamBat{
    constructor(playerName,runs,balls,sixes,fours,status,outBy)
    {
      this.playerName=playerName;
      this.runs=runs;
      this.balls=balls;
      this.status=status;
      this.outBy=outBy;
      this.sixes=sixes;
      this.fours=fours;
    }
}
class TeamBall{
    constructor(playerName,overs,wickets,runs,extras,economy)
    {
        this.playerName=playerName;
        this.overs=overs;
        this.wickets=wickets;
        this.runs=runs;
        this.extras=extras;
        this.economy=economy;
    }
}
$(document).ready(function(){
    $("#team1Details").hide(); 
    $("#team2Details").hide();
    $("#toss").hide();
    $("#scoreBatTeam1").hide();
    $("#scoreBallTeam2").hide();
    $("#scoreBatTeam2").hide();
    $("#scoreBallTeam1").hide();
    
});
$("#teamDetailsBtn").click(function(){
    $("#team1Details").show();
    $("#teamDetails").hide(); 
    var team1=$("#team1").val()
    var team2=$("#team2").val()
     $("#team1Name").text(team1);
     $("#team2Name").text(team2);
     $("#tossSelect").append('<option value='+team1+'>'+team1+'</option>'+
                           '<option value='+team2+'>'+team2+'</option>');
})

$("#team1DetailsBtn").click(function(){
    for(var i=1;i<=11;i++)
    {
    var name=$('#t1p'+i).val();
    var spec=$('#t1p'+i+'s').val();
    var pos=$('#pos1-'+i).val();
    var team1=new Players(name,spec,pos);
    team1Players.push(team1);
    }
    console.log(team1Players);
    $("#team2Details").show();
    $("#team1Details").hide();
    
})
$("#team2DetailsBtn").click(function(){
    for(var i=1;i<=11;i++)
    {
    var name=$('#t2Player'+i).val();
    var spec=$('#t2p'+i+'Spec').val();
    var pos=$('#pos2-'+i).val();
    var team2=new Players(name,spec,pos);
    team2Players.push(team2);
    }
    console.log(team2Players);
    $("#toss").show();
    $("#team2Details").hide();

})

$("#tossBtn").click(function(){

    console.log($("#tossSelect").val())
    console.log($("#overs").val())
    $("#scoreBatTeam1").show();
    $("#scoreBallTeam2").show();
    $("#toss").hide(1000)
    if($("#tossSelect").val()==$("#team1").val() && $("#choose").val()=="Batting")
    {
        for(var i=0;i<team1Players.length;i++)
        {
            $("#playersTeam1").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
            $("#playersTeam2").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')
        }
        for(var i=0;i<team2Players.length;i++)
        {
            if(team2Players[i].spec=="bowler"||team2Players[i].spec=="allRounder")
            {
            $("#outBy1").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')
            $("#bowlerTeam1").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')

            $("#outBy2").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
            $("#bowlerTeam2").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
            }
        }
    }
    else{

        for(var i=0;i<team1Players.length;i++)
        {
            if(team1Players[i].spec=="bowler"||team1Players[i].spec=="allRounder")
            {
            $("#outBy2").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')
            $("#bowlerTeam2").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')

            $("#outBy1").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
            $("#bowlerTeam1").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
            }
        } 

    for(var i=0;i<team2Players.length;i++)
        {
         
            $("#playersTeam1").append('<option value='+ team2Players[i].name+'>'+ team2Players[i].name+'</option>')
            $("#playersTeam2").append('<option value='+ team1Players[i].name+'>'+ team1Players[i].name+'</option>')
        }

    }
})
//batting 1st Innings
$("#enterBatsmanStat1").click(function(){
   
      playerName=$("#playersTeam1").val();
      runs=$("#runs1").val();
      balls=$("#balls1").val();
      status=$("#status1").val();
      outBy=$("#outBy1").val();
      sixes=$("#sixes1").val();
      fours=$("#fours1").val();
    var team1Bat=new TeamBat(playerName,runs,balls,sixes,fours,status,outBy)
    var team2Bat=new TeamBat(playerName,runs,balls,sixes,fours,status,outBy)
    if($("#tossSelect").val()==$("#team1").val&& $("#choose").val()=="Batting")
    {
        team1BatArr.push(team1Bat);
        scoreTeam1=0; 
        console.log(team1BatArr);  
    }
    else
    {
        team2BatArr.push(team2Bat); 
        scoreTeam2=0;
        console.log(team2BatArr);
    } 
})
//bowling 1st Innings
$("#enterBowlerStat1").click(function(){
    playerNameBall=$("#bowlerTeam1").val();
    overs=$("#oversBowler1").val();
    wickets=$("#wicketsBowler1").val();
    runs=$("runsBowler1").val();
    extras=$("extrasBowler1").val();
    economy=$("economyBowler1").val();

    var team2Ball=new TeamBall(playerNameBall,overs,wickets,runs,extras,economy)
    var team1Ball=new TeamBall(playerNameBall,overs,wickets,runs,extras,economy)

    if($("#tossSelect").val()==$("#team1").val() && $("#choose").val()=="Batting")
    {
    team2BallArr.push(team2Ball);
    console.log(team2BallArr);
    }
    else
    {
        team1BallArr.push(team1Ball);
    }
})
//batting 2nd Innings
$("#enterBatsmanStat2").click(function(){
   
    playerName=$("#playersTeam2").val();
    runs=$("#runs2").val();
    balls=$("#balls2").val();
    status=$("#status2").val();
    outBy=$("#outBy2").val();
    sixes=$("#sixes2").val();
    fours=$("#fours2").val();
  var team1Bat=new TeamBat(playerName,runs,balls,sixes,fours,status,outBy)
  var team2Bat=new TeamBat(playerName,runs,balls,sixes,fours,status,outBy)
  if($("#tossSelect").val()==$("#team1").val())
  {
      team2BatArr.push(team2Bat);
      console.log(team2BatArr);  
  }
  else
  {
      team1BatArr.push(team1Bat); 
      console.log(team1BatArr);
  } 
})
//bowling 2nd Innings
$("#enterBowlerStat2").click(function(){
  playerNameBall=$("#bowlerTeam2").val();
  overs=$("#oversBowler2").val();
  wickets=$("#wicketsBowler2").val();
  runs=$("runsBowler2").val();
  extras=$("extrasBowler2").val();
  economy=$("economyBowler2").val();

  var team2Ball=new TeamBall(playerNameBall,overs,wickets,runs,extras,economy)
  var team1Ball=new TeamBall(playerNameBall,overs,wickets,runs,extras,economy)

  if($("#tossSelect").val()==$("#team1").val() && $("#choose").val()=="Batting")
  {
  team2BallArr.push(team2Ball);
  console.log(team2BallArr);
  }
  else
  {
      team1BallArr.push(team1Ball);
      console.log(team1BallArr);
  }
})
$("#finishDetails1").click(function(){
    $("#scoreBatTeam2").show();
    $("#scoreBallTeam1").show();
    $("#scoreBatTeam1").hide();
    $("#scoreBallTeam2").hide();
})
$("#finishDetails2").click(function(){
    var teamOne=$("#team1").val();
    var teamTwo=$("#team2").val();
    var tossWon=$("#tossSelect").val();
    var chooseWonToss=$("#choose").val();
    var format=$("#format").val();

    var matchObj=new Match(teamOne,teamTwo,team1Players,team2Players,tossWon, chooseWonToss,format,team1BatArr,team2BatArr,team1BallArr,team2BallArr)
    matchDetailsArr.push(matchObj);
    console.log(matchDetailsArr);
    localStorage.setItem("matches", JSON.stringify(matchDetailsArr));
    alert('Sucessfully Added');
})
$("#matches").click(function(){
    console.log(localStorage.getItem('matchDetailsArr'));
})