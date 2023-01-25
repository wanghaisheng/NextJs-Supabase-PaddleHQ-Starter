import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange
} from 'utils/supabase-admin';
import { NextApiRequest, NextApiResponse } from 'next';
import { verifyPaddleWebhook } from 'verify-paddle-webhook';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(!req.body) return res.status(401).json({error: "No req body found"})
  
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PADDLE_PUBLIC_KEY;
  // if (verifyPaddleWebhook(P  UBLIC_KEY, req.body)) {
    // console.log('Webhook is valid!');
    if(req.body.alert_name === "subscription_created"){
      res.status(200).json({success: "true"})
    }
    if(req.body.alert_name === "subscription_cancelled"){
      
      res.status(200).json({success: "true"})
    }
  // }
  else {console.log("invalid");res.status(400).json({success: "false"})}
  
};
