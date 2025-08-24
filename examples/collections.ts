import { IntaSend, MpesaStkPushRequest } from "../dist/index.mjs";

const intaSend = new IntaSend({
    publishableKey: process.env.INTASEND_PUBLIC_KEY!,
    secretKey: process.env.INTASEND_SECRET_KEY!,
    live: false,
}) 

let collections = intaSend.collections()

let payload = {
    amount: 10,
    api_ref: "intasend-ts",
    phone_number: "254717135176"
} satisfies MpesaStkPushRequest


async function initStkPush() {
    let response = await collections.mpesaStkPush(payload)
    console.log(response) // RZO8E3Q

    collections.mpesaStkPushStatus(response.invoice.invoice_id)
}

initStkPush()