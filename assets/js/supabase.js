// Supabase 클라이언트 설정

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://gydzcrzjofpmxogxcvqc.supabase.co'
const SUPABASE_KEY = sb_publishable_KLYY3c7bmGpTcaIY3Khetg_3kstdgY8

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)