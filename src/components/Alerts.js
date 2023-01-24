import React from 'react'

export default function Alerts(props) {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
 {props.alert.msg}
</div>
    </div>
  )
}
