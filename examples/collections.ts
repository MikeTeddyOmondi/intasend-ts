import { IntaSend, MpesaStkPushRequest } from "../src";

const intaSend = new IntaSend({
    publishableKey: "",
    secretKey: "",
    live: false,
}) 

let collections = intaSend.collections()

let payload = {
    amount: 10,
    api_ref: "intasend-ts",
    phone_number: "254717135176"
} satisfies MpesaStkPushRequest


async function initStkPush() {
    let response = collections.mpesaStkPush(payload)
    console.log(response)
}

initStkPush()