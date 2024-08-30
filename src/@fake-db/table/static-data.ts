
import { Data } from "src/constant/data"

const {position_table_data} = Data;

const rows = position_table_data.map(item => {
  return {
    full_name : item.symbol,
    email : item.time,
    id: `${item.price} $`,
  }
})

export {rows}
