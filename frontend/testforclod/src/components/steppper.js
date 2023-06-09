import { Stepper, Step, StepLabel } from '@mui/material';



export function MyStepper() {
    const currentPath = window.location.pathname.replace('/', '');
    const steps = ['1', '2', '3'];
    return (
        <Stepper className="MuiStep" activeStep={Number(currentPath) - 1} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}