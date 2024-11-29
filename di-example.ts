class Engine {
    isStared = false;

}
class StartButton {
    press(engine:Engine){
        engine.isStared = true;
    }
}
class Car {
    private engine: Engine
    private startbutton:StartButton
    constructor(){
        this.engine = new Engine
        this.startbutton = new StartButton
    }
    start(){
        this.startbutton.press(this.engine)
        if (this.engine.isStared===true){
            console.log("Started engine")
        }
    }
}

const car = new Car();
car.start()