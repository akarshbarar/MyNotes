import { createClient } from '@supabase/supabase-js'


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDUwMjc5MSwiZXhwIjoxOTM2MDc4NzkxfQ.1o_H_VtxuTf-iQawWz8WEVquOVPF7ms1797M_Nl_UF8'
const SUPABASE_URL = "https://uctkwlswlcabzouaekxn.supabase.co"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;