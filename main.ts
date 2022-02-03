input.onButtonPressed(Button.A, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -95,
    robotbit.Motors.M2B,
    97
    )
})
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorStop(robotbit.Motors.M2A)
    robotbit.MotorStop(robotbit.Motors.M2B)
})
input.onButtonPressed(Button.B, function () {
    robotbit.StepperDegree(robotbit.Steppers.M1, -90)
})
basic.forever(function () {
	
})
