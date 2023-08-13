/*
1. 각 턴마다 주사위를 굴려 나온 숫자 만큼 이동한다.
2. 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
3. 남은 연료가 이동할 걸리에 필요한 연료보다 부족하면 이동하지 못한다.
4. 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
5. 게임 시점에 가장 멀리 있는 사람이 승리
*/

var car ={
    fuel: Math.ceil(Math.random()*10+10), //연료(L)
    power: Math.ceil(Math.random()*3+2), //연비 
    moved: 0,
    run: function(){
        var km=Math.ceil(Math.random()*6);
        var wastedFuel = km/this.power;
        if(this.fuel<wastedFuel){
            console.log('이동 불가');
        return;
        }
        this.fuel -=wastedFuel;
        this.moved+=km;

        
        console.log(km+'km 이동 (총'+this.moved+'km)');

    }
};

car.run();