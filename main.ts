function rechts () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, speed)
    basic.pause(1000)
    motor.motorStopAll()
}
function vooruit () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, speed)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, speed)
    basic.pause(1000)
    motor.motorStopAll()
    rechts()
}
let speed = 0
speed = 300
basic.forever(function () {
    vooruit()
})
