basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (OSOYOO_Sensor.Ultrasonic(DigitalPin.P14, DigitalPin.P15) > 15) {
        if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.Get) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NoGet)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, 180)
            basic.pause(400)
        } else if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NoGet) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.Get)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinRight, 180)
            basic.pause(400)
        } else if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NoGet) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NoGet)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.White)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, 200)
        } else {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
            basic.pause(100)
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Red)
            OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Back)
            basic.pause(200)
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, 180)
            basic.pause(200)
        }
    } else {
        if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.Get) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NoGet)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, 180)
            basic.pause(400)
        } else if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NoGet) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.Get)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinRight, 180)
            basic.pause(400)
        } else if (OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NoGet) && OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NoGet)) {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_SpinLeft)
        } else {
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.Red)
            OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Back)
            basic.pause(200)
            OSOYOO_Robot.RGB_Car_Big2(OSOYOO_Robot.enColor.OFF)
            OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_SpinLeft, 180)
            basic.pause(500)
        }
    }
})
