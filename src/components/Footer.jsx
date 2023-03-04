import { BsFacebook,BsTwitter,BsYoutube,BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
function Footer()
{
    return(
        <div>
            <div className="text-xs text-gray-700 w-10/12 mx-auto pb-32">
                <p className="pb-4">1
                All listening times are approximate and were measured using music playback with pre-production hardware and software, with fully charged Pixel Buds Pro and case, and other features disabled (including active noise cancellation). Case is used to recharge Pixel Buds Pro. Charging times are approximate. Use of other features will decrease battery life. Battery life depends on device, features enabled, usage, environment and many other factors. Actual battery life may be lower.</p>
                <p className="pb-4">2
                All listening times are approximate and were measured using music playback with pre-production hardware and software, with fully charged Google Pixel Buds A-Series and case, and other features disabled. Case is used to recharge Google Pixel Buds A-Series when their batteries are depleted. Use of other features will decrease battery life. Battery life depends on device, features enabled, usage, environment and other factors. Actual battery life may be lower.</p>
                <p className="pb-4">*
                0% APR with equal monthly payments on phone purchases: Google Store Financing is a credit card account issued and serviced solely by Synchrony Bank and can be used only for purchases at store.google.com. Credit card application decisions are made solely by Synchrony Bank. The estimated monthly payment shown on any phone purchase may be rounded up to the next whole dollar or may be shown rounded to the whole cent, but in either event only applies with the use of a Google Store Financing credit card account. See your billing statement for your actual equal monthly payment required, which will be rounded to the whole cent. If you make your payments by the due date each month, the monthly payment (adjusted for taxes, delivery and any other items purchased in the same sales transaction) should allow you to pay off the phone purchase within the number of months advertised if this balance is the only balance on your account during that time period. If you have other balances on your account, this monthly payment will be added to the monthly payment applicable to those balances. For new accounts: Phone purchases (any transaction that includes a phone) APR is 0.00%. All other (regular) purchases, APR is 29.99%. Minimum interest charge is $2.00. APRs are accurate as of 01/08/20. Subject to credit approval.</p>
                <p>†All orders that deliver free of charge use the lowest-cost option unless otherwise noted.</p>
            </div>
            <div className="flex justify-end w-11/12 gap-x-8 pb-10 text-sm text-gray-700">
                <div>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Shipping options</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Tracking a package</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Country availability</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Repairs</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Installation</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Ideas & Info</p>
                </div>
                <div>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Help Center</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Contact Us</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Financing</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Device recycling</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Sustainability</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Gift returns</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Refurbished</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Trade-in</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Pixel for Business</p>
                    <p className="pb-6 hover:text-blue-700 hover:cursor-pointer">Locations</p>
                </div>
            </div>
            <footer className="w-10/12 text-gray-700 text-lg py-4 flex flex-wrap gap-4 justify-center">
                <div className="text-gray-700 text-lg flex gap-x-4">
                    <BsTwitter/>
                    <BsInstagram/>
                    <BsFacebook/>
                    <BsYoutube/>
                    <SiTiktok/>
                </div>
                <div className="flex flex-wrap text-xs justify-center gap-x-6">
                    <p className="hover:cursor-pointer">United States</p>
                    <p className="hover:cursor-pointer">Privacy</p>
                    <p className="hover:cursor-pointer">Google Nest Commitment to Privacy</p>
                    <p className="hover:cursor-pointer">Sales Terms</p>
                    <p className="hover:cursor-pointer">Terms of Service</p>
                    <p className="hover:cursor-pointer">Careers</p>
                </div>
            </footer>
        </div>
    );
}
export default Footer;