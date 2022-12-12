import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jpsetimmxjawidfcyvlk.supabase.co';
const supabaseKey:string = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);