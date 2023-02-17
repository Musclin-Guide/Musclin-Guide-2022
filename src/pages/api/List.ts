import { NextApiRequest, NextApiResponse } from "next";
import type { PostgrestResponse } from '@supabase/supabase-js'

interface data {
  error: null
  data: any[]
  count: number | null
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostgrestResponse<data>>
) {
  const { id } = req.query;
  const isFirstPage = !id;

  const pageCondition = {
    skip: 1,
    
}
}