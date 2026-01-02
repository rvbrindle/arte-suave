import {EnvelopeIcon} from "@heroicons/react/24/outline";
import ContactForm from "../Components/ContactForm";
import Icon from "../Components/Icon";

export default function ContactPage() {
    return (
        <>
            <div
                id='contact-page'
                className='screen-1 w-screen min-h-screen bg-neutral-200 flex text-center flex-col'>
                <div className='container text-black mx-auto mb-2 py-12 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-2xl md:text-4xl font-extrabold pb-2'>Get in <span>Touch</span></h1>
                </div>
                <div className='mx-auto w-3/4 flex flex-row justify-center items-center'>
                    <a className='w-full md:w-1/3 align-middle text-black flex flex-row justify-center hover:scale-110 hover:text-red-700 transition ease-in-out'
                       href="mailto:royjitsu@artesuave.co.uk">
                        <Icon
                            width='11'
                            icon='mail'
                        /> <p
                        className='text-lg align-middle my-auto pl-3 hidden sm:flex'>Mail</p>
                    </a>
                    <a className='w-full md:w-1/3 align-middle text-black flex flex-row justify-center hover:scale-110 hover:text-red-700 transition ease-in-out'
                       href="https://www.facebook.com/profile.php?id=61563344016748">
                        <Icon
                            width='11'
                            icon='instagram'
                        /> <p
                        className='text-lg align-middle my-auto pl-3 hidden sm:flex'>Instagram</p>
                    </a>
                    <a className='w-full md:w-1/3 align-middle text-black flex flex-row justify-center hover:scale-110 hover:text-red-700 transition ease-in-out'
                       href="https://www.instagram.com/artesuaveleeds">
                        <Icon
                            width='11'
                            icon='facebook'
                        /> <p
                        className='text-lg align-middle my-auto pl-3 hidden sm:flex'>Facebook</p>
                    </a>
                </div>
                <div className='text-2xl boldest motion-safe:animate-fadeIn mb-8 mt-8'>
                    {/*<ContactForm/>*/}
                    <iframe
                        src="https://link.saleshero.uk/widget/form/6wMeiJnEzHxPK8AoazYh"
                        // style="width:100%;height:100%;border:none;border-radius:3px"
                        style={{
                            width: "100%",
                            height: "569px",
                            border: "none",
                            borderRadius: "3px",
                        }}
                        id="inline-6wMeiJnEzHxPK8AoazYh"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Website Contact Form"
                        data-height="569"
                        data-layout-iframe-id="inline-6wMeiJnEzHxPK8AoazYh"
                        data-form-id="6wMeiJnEzHxPK8AoazYh"
                        title="Website Contact Form"
                    >
                    </iframe>
                </div>
            </div>
        </>
    )
}