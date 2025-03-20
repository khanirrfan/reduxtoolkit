/* refs */
/**
 * refs are useful when ou work with non-reac system like browser
 * it holds a DOM node mostly but if you want to have any other value it will hold
 * useImeperativeHandle hook lets you customizes the ref value exposed by your component
 *
 */

/* useEffect */
/* 
    connects a component with external system, like api call, animation
    two rarely used useEffect variation
    * useLayoutEffect - it fires before browser repaints the screen
    * useINsetionEffect - it fires just before react makes changes to  dom, you can insert css
 */

/* performance hooks - if nothing is changed from the response it will prevents the rerendering of UI */

/* 
    useMemo - cache the result
    useCallback - remembers the response of a function

    sometimes rerendering needed which can not be skipped
    just like entering the value in input - controlled and uncontrolled

    for this we can use two hooks
        useTransition - it lets mark the state transition as non-blocking and allow other updates to interrupt
        useDefferedValue - it prioritise the order of critcal and non clritical deferred the non critical part
         and update others first
*/

/* useActionState */
/* 
        lets you update state based result of a form action
        const [formState, formAction] = useActionState(actionfunction, initialState, permalink(optional))
        actionfunction -  after submitting or pressed button it will have the logic what you want inside the formState
        initialState - its the value of formState initially
        and you ccan update the value of state here based on some logic even before the hydration of server request

        useful if we are using server rendering,otherwise its same as localState of the component
        */
