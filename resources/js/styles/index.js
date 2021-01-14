


const color = {


    primary:        `#1976D2`,
    secondary:      `#42A5F5`,
    accent:         `#FF9100`,

    border:         `#CFD8DC`,
    background:     `#EAEBEC`,

    textPrimary:    `#263238`,
    textSecondary:  `#455A64`,
    textDisabled:   `#90A4AE`,

    error:          `#F44336`,


    get: function (color) {

        const colors = {

            'primary':       () => this.primary,
            'secondary':     () => this.secondary,
            'accent':        () => this.accent,

            'border':        () => this.border,
            'background':    () => this.background,

            'textPrimary':   () => this.textPrimary,
            'textSecondary': () => this.textSecondary,
            'textDisabled':  () => this.textDisabled,

            'error':         () => this.error
        }

        return (colors[color] || colors['textDisabled'])()
    }

}



const styles = {

    color: color,

}



export default styles
