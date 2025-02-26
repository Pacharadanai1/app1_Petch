import React from "react";

export default function FormText() {
    const textPswd = React.useRef();
    const textPswd2 = React.useRef();

    const onBlurPassword1 = () => {
        let pswd = textPswd.current.value
        if(pswd != ''&& !pswd.match(/^[0-9a-zA-Z]+$/)){
            textPswd.current.value = ''
            alert("ต้องเป็น 0-9 a-z A-Z เท่านั้น")
        }    
    }

    const onBlurPassword2 = () => {
        if(textPswd.current.value != textPswd2.current.value){
            textPswd2.current.value = ""
            alert("รหัสผ่านไม่ตรงกัน")
        }
    }

    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{width: "400px", backgroundColor: "#cee"}}>
            <form>
                <div className="from-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้(login)</label>
                    <input type="text" className="form-control form-control-sm" id="login" 
                    name="login" maxLength="20" />
                </div>

                <div className="from-group mb-2">
                    <label htmlFor="pswd">รหัสผ่าน</label>
                    <input type="password" className="form-control form-control-sm" id="pswd" 
                    name="pswd" ref={textPswd} onBlur={onBlurPassword1} />
                </div>

                <div className="from-group mb-2">
                    <label htmlFor="pswd2">ยืนยันรหัสผ่าน</label>
                    <input type="password" className="form-control form-control-sm" id="pswd2" 
                     ref={textPswd2} onBlur={onBlurPassword2} />
                </div>

                <div className="from-group mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea className="form-control form-control-sm" id="memo" name="memo" 
                    rows="2" maxLength="200" >   
                    </textarea>
                </div>

                <div className="text-center">
                <button type="submit" className="btn btn-primary">OK</button>
                </div>
            </form>
        </div>
    )
}