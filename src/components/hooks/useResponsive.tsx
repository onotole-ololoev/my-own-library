import { useMediaQuery } from "react-responsive"



export const useResponsive = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    const isTablet = useMediaQuery({minWidth: 768,maxWidth: 1109})
    const isDesktop = useMediaQuery({minWidth: 1110})

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}