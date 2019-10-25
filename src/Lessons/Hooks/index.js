import React, {useState, useEffect} from 'react'

const Hooks = () => {
	const initialState = () => Number(window.localStorage.getItem("count"))
	const [state, setstate] = useState(initialState);

	useEffect(() => {
		window.localStorage.setItem("count", state)
	}, [state])

	return (
		<div>
			<p>{state}</p>

			<button onClick={() => setstate(state + 1)}>Add</button>
			<button onClick={() => setstate(state - 1)}>Increase</button>
		</div>
	)
}

export default Hooks;
