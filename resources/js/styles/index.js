


const color = {


    primaryDark:    (alpha = 1) => `rgba(13, 71, 161, ${ alpha })`,
    primary:        (alpha = 1) => `rgba(25, 118, 210, ${ alpha })`,
    secondary:      (alpha = 1) => `rgba(33, 150, 243, ${ alpha })`,
    tertiary:       (alpha = 1) => `rgba(144, 202, 249, ${ alpha })`,
    accent:         (alpha = 1) => `rgba(24, 255, 255, ${ alpha })`,

    border:         (alpha = 1) => `rgba(207, 216, 220, ${ alpha })`,
    background:     (alpha = 1) => `rgba(234, 235, 236, ${ alpha })`,

    textPrimary:    (alpha = 1) => `rgba(38, 50, 56, ${ alpha })`,
    textSecondary:  (alpha = 1) => `rgba(69, 90, 100, ${ alpha })`,
    textDisabled:   (alpha = 1) => `rgba(144, 164, 174, ${ alpha })`,

    error:          (alpha = 1) => `rgba(244, 67, 54, ${ alpha })`,

    primaryInverted:    (alpha = 1) => `rgba(236, 239, 241, ${ alpha })`,
    secondaryInverted:  (alpha = 1) => `rgba(255, 255, 255, ${ alpha })`,
    accentInverted:     (alpha = 1) => `rgba(38, 50, 56, ${ alpha })`,
    disabledInverted:   (alpha = 1) => `rgba(120, 144, 156, ${ alpha })`,
    backgroundInverted: (alpha = 1) => `rgba(55, 71, 79, ${ alpha })`,


    /**
     * @param {string}  color       Color name for background component
     * @param {boolean} inverted    Color inverted for foreground component
     */
    get: function (color, inverted = false, alpha = 1) {

        const colors = {

            'primary':       (alpha = 1) => this.primary(alpha),
            'secondary':     (alpha = 1) => this.secondary(alpha),
            'accent':        (alpha = 1) => this.accent(alpha),

            'border':        (alpha = 1) => this.border(alpha),
            'background':    (alpha = 1) => this.background(alpha),

            'textPrimary':   (alpha = 1) => this.textPrimary(alpha),
            'textSecondary': (alpha = 1) => this.textSecondary(alpha),
            'textDisabled':  (alpha = 1) => this.textDisabled(alpha),

            'error':         (alpha = 1) => this.error(alpha)
        }

        const invertedColors = {

            'primary':      (alpha = 1) => this.primaryInverted(alpha),
            'secondary':    (alpha = 1) => this.secondaryInverted(alpha),
            'disabled':     (alpha = 1) => this.disabledInverted(alpha),
            'accent':       (alpha = 1) => this.accentInverted(alpha),
            'background':   (alpha = 1) => this.backgroundInverted(alpha)

        }

        return inverted
            ? (invertedColors[color] || invertedColors['primary'])(alpha)
            : (colors[color] || colors['textDisabled'])(alpha)
    },



    /**
     * @param {string}  color   The color do paint element
     * @param {number}  alpha   Alpha scale of color
     * @param {string}  def     Default color for use when color is undefined
     */
    filter: function (color, alpha = 1, def = 'white') {

            if (color) {
                return (
                    ((color.indexOf('#') === 0) || (color.indexOf('rgba(') === 0))
                        ? color
                        : this.get(color, false, alpha)
                )
            }

            return def
    }

}



const styles = {

    color: color,

}



export default styles
