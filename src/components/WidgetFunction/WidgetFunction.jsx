import { useState } from "react"

function WidgetFunction() {
    const [WidgetCount, setWidgetCount] = useState(0)

    const handleCounter = () => {setWidgetCount(WidgetCount+1)}
}

export default WidgetFunction