import FormWrapper from "./components/FormWrapper";
import PageWrapper from "./components/PageWrapper";
import RadioOption from "./components/RadioOption";
import RadioWrapper from "./components/RadioWrapper";

export default function Toolkit() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.checked)
    }

    const onChangeValue = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <PageWrapper>
                <FormWrapper handleSubmit={handleSubmit} title="Test Title" description="test description">
                    <RadioWrapper name="Name" description="description" onChangeValue={onChangeValue}>
                        <RadioOption name="Same as Wow" id="push-notifications" value="Same as" />
                        <RadioOption name="Same as Email" id="push-notifications" value="Same as" />
                        <RadioOption name="Same as Email" id="push-notifications" value="Same as" />
                    </RadioWrapper>
                </FormWrapper>
            </PageWrapper>
        </>
    );
}
