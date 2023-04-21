import { Input } from 'antd'

export default function Header({setItemList, setLoading}) {

    //constructing a new value
const handleAdd  = async (value) => {
    if (value.length < 3) return 

    setLoading(true)
    const newItem = {
        done: false,
        userId: 'me',
        item: value,//what user type is value
    }

    
    const response = await fetch(' https://much-to-do-vdf.web.app/items', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem),
    })
    const data = await response.json()
    setItemList(data)
    setLoading(false)
}



    return(
    <header>
     <Input.Search 
     allowClear
     enterButton='Add'
     size= 'Large'
     onSearch= {handleAdd}
     placeholder='Add New Todo Item' />
    </header>

    )

}