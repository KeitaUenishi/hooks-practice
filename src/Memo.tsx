import React from "react"

type Props = {
  count: number
}

export const ChildMemoComponent: React.FC<Props> = React.memo(({ count }) => {
  console.log("render ChildMemoComponent")
  return (
    <div>
      <h1>Child Memo Component {count}</h1>
    </div>
  )
})

export const ChildComponent: React.FC<Props> = ({ count }) => {
  console.log("render ChildComponent")
  return (
    <div>
      <h1>Child Component {count}</h1>
    </div>
  )
}