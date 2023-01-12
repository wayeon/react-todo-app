import React from 'react'

export default function Form({ value, btnSubmit, setValue }) {
    const textChange = (e) => {
        // console.log('e', e.target.value)
        setValue(e.target.value);
    }

    return (
        <div>
            {/* 할일목록 추가 입력창 만들기 */}
            <form style={{ display: 'flex' }} onSubmit={btnSubmit}>
                <input type="text" name="value" style={{ flex: '10', padding: '5px' }} placeholder="해야할 일을 입력하세요" onChange={textChange} value={value} />
                <input type="submit" value="입력" style={{ flex: '1' }} />
            </form>
        </div>
    )
}
