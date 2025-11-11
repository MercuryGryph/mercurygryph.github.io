type MouseEventHandler = (event: MouseEvent) => void

let Handlers = {
    GlobalMouseEvent: {
        OnMouseMove: new Map<string, MouseEventHandler>()
    }
}

const GlobalMouseEvent = {
    OnMouseMove: {
        all: (): Map<string, MouseEventHandler> => {
            return Handlers.GlobalMouseEvent.OnMouseMove
        },
        register: (id: string, handler: MouseEventHandler) => {
            Handlers.GlobalMouseEvent.OnMouseMove.set(id, handler)
        },
        unregister: (id: string): boolean => {
            return Handlers.GlobalMouseEvent.OnMouseMove.delete(id)
        }
    }
}

document.onmousemove = (e: MouseEvent): void => {
    GlobalMouseEvent.OnMouseMove.all().forEach((handler) => {
        handler(e)
    })
}

export { GlobalMouseEvent }
