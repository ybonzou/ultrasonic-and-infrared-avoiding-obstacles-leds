basic.show_icon(IconNames.HEART)

def on_forever():
    if OSOYOO_Sensor.ultrasonic(DigitalPin.P14, DigitalPin.P15) > 15:
        if OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NO_GET):
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(100)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINLEFT, 180)
            basic.pause(300)
        elif OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NO_GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.GET):
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(100)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINRIGHT, 180)
            basic.pause(300)
        elif OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.GET):
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_RUN, 120)
        else:
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_STOP)
            basic.pause(200)
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(300)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINLEFT, 180)
            basic.pause(1000)
    else:
        if OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.NO_GET):
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(100)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINLEFT, 180)
            basic.pause(300)
        elif OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.NO_GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.GET):
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(100)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINRIGHT, 180)
            basic.pause(300)
        elif OSOYOO_Sensor.IR_Sensor(DigitalPin.P12, OSOYOO_Sensor.enIR.GET) and OSOYOO_Sensor.IR_Sensor(DigitalPin.P13, OSOYOO_Sensor.enIR.GET):
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_RUN, 120)
        else:
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_STOP)
            basic.pause(200)
            OSOYOO_Robot.car_ctrl(OSOYOO_Robot.CarState.CAR_BACK)
            basic.pause(300)
            OSOYOO_Robot.car_ctrl_speed(OSOYOO_Robot.CarState.CAR_SPINLEFT, 180)
            basic.pause(1000)
basic.forever(on_forever)
