export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient"><u>⭐TrainrPath⭐</u></h1>
            <p><strong>Simple <u><b><i>30-Day</i></b></u> Workout Plan</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/DevanteH93" target="_blank">DevanteHarvey</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}