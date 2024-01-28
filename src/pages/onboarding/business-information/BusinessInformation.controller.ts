import React, { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { OnboardingContext } from "../../../store/context/onboardingContext/OnboardingContext";
import { UserContext } from "../../../store/context/userContext/UserContext";

export default function useBusinessInformationController() {
    const { handleCloudinaryImageUpload, handleSendBusinessInformation } =
        useContext(OnboardingContext);
    const { user } = useContext(UserContext);
    const [businessInformation, setBusinessInformation] = useState({
        businessName: "",
        businessAddress: "",
        businessEmail: "",
        country: "Nigeria",
        stateCity: "",
        phoneNumber: "",
        logo: "",
        websiteUrl: "",
    });

    const changeBusinessInfo = (
        e: React.ChangeEvent<any>,
        name?: string,
        value?: string
    ) => {
        if (name) {
            setBusinessInformation({
                ...businessInformation,
                [name]: value,
            });
            return;
        } else if (
            e.target instanceof HTMLInputElement &&
            e.target.type === "file" &&
            e.target.files?.length
        ) {
            handleCloudinaryImageUpload(e.target.files[0]).then((res) => {
                setBusinessInformation({
                    ...businessInformation,
                    [e.target.name]: res.data.secure_url,
                });
                toast("Done ✅");
            });
        } else {
            setBusinessInformation({
                ...businessInformation,
                [e.target.name]: e.target.value,
            });
        }
    };

    // ?? === MULTI ADDING INPUTS ( DOCUMENTS ) ==== ?? //

    const documentsList = [
        "Business registration",
        "Non-disclosure agreement",
        "Business license",
    ];

    const [requiredDocuments, setRequiredDocuments] = useState([
        {
            requiredDocumentType: "",
            requiredDocumentFile: "",
        },
    ]);

    const addDocument = () => {
        setRequiredDocuments([
            ...requiredDocuments,
            {
                requiredDocumentType: "",
                requiredDocumentFile: "",
            },
        ]);
    };

    const deleteDocument = (idx: number) => {
        if (requiredDocuments.length === 1) return;
        const newList = [...requiredDocuments];
        newList.splice(idx, 1);
        setRequiredDocuments(newList);
        toast.info("Document deleted");
    };

    const documentTypeChange = (idx: number, requiredDocumentType: string) => {
        const newList = [...requiredDocuments];
        newList[idx].requiredDocumentType = requiredDocumentType;
        setRequiredDocuments(newList);
    };

    const documentFileChange = async (
        idx: number,
        requiredDocumentFile: File
    ) => {
        const newList = [...requiredDocuments];

        handleCloudinaryImageUpload(requiredDocumentFile).then((res) => {
            newList[idx].requiredDocumentFile = res.data.secure_url;
            toast("Done ✅");
            setRequiredDocuments(newList);
        });
    };

    // ?? === MULTI ADDING INPUTS ( SOCIAL MEDIA LINKS ) ==== ?? //

    const socialMediaList = [
        "Twitter(𝕏) 🐦",
        "Facebook 📘",
        "Instagram 📸",
        "Youtube 📺",
        "Linkedin 👔",
        "TikTok 🎶",
        "Github 👨‍💻",
    ];

    const [socialMediaInfo, setSocialMediaInfo] = useState([
        { socialMediaName: "", link: "" },
    ]);

    const addSocialMedia = () => {
        setSocialMediaInfo([
            ...socialMediaInfo,
            { socialMediaName: "", link: "" },
        ]);
    };

    const deleteSocialMedia = (idx: number) => {
        if (socialMediaInfo.length === 1) return;
        const newList = [...socialMediaInfo];
        newList.splice(idx, 1);
        setSocialMediaInfo(newList);
        toast.info("Social Media deleted!");
    };

    const socialMediaNameChange = (idx: number, name: string) => {
        const newList = [...socialMediaInfo];
        newList[idx].socialMediaName = name;
        setSocialMediaInfo(newList);
    };

    const socialMediaLinkChange = (idx: number, link: string) => {
        const newList = [...socialMediaInfo];
        newList[idx].link = link;
        setSocialMediaInfo(newList);
    };

    //** ------------------------------------------------------- **//
    const submitBusinessInformation = (e: FormEvent) => {
        e.preventDefault();
        if (user?.id)
            handleSendBusinessInformation(
                {
                    ...businessInformation,
                    socialMediaInfo,
                    requiredDocuments,
                },
                user.id
            );
    };

    return {
        documentsList,
        requiredDocuments,
        businessInformation,
        changeBusinessInfo,
        addDocument,
        deleteDocument,
        documentTypeChange,
        documentFileChange,
        socialMediaList,
        socialMediaInfo,
        addSocialMedia,
        deleteSocialMedia,
        socialMediaNameChange,
        socialMediaLinkChange,
        submitBusinessInformation,
    };
}
