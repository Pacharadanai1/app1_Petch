import React, { Component } from "react";

export default class Button extends Component {
  showAlert(msg) {
    alert(msg);
  }

  onClickButtonOK = () => {
    this.showAlert("What's up bro!!!");
  };

  render() {
    return <div style={{textAlign:'center'}}> 
    <button onClick={this.onClickButtonOK}>OK</button>
    </div>
  }
}

/*export default class Calendar extends Component {
  getDate() {
    const dayNames = [
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัสบดี",
      "ศุกร์",
      "เสาร์",
    ];
    const monthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฏาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const date = new Date();
    const weekDay = dayNames[date.getDay()];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `วัน ${weekDay} ที่ ${day} ${month} ${year}`;
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>{this.getDate()}</h3>
      </div>
    );
  }
}*/
