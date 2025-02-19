import React from "react";

export default function Home(){
    return(
        <p style={{textAlign:'center'}}>
            รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย
            <br/>
            แต่ทานต้องเป็น <a href="/member">สมาชิก</a> จึงจะ
            สั่งซื้อได้<br/>
            หากมีข้อสงสัย กรุณา<a href="/contect">ติดต่อเรา</a>
        </p>
    )
}