import styled from "styled-components";

import { Modal } from "@revoltchat/ui";
import { ModalProps } from "../types"

import { Message } from "revolt.js";
import { emojiDictionary } from "../../../assets/emojis"
import { HackAlertThisFileWillBeReplaced } from "../../../components/common/messaging/MessageBox"

const PickerContainer = styled.div`
    max-height: 420px;
    max-width: 370px;
    overflow: hidden;

    > div {
        position: unset;
    }
`

export default function ReactMessage({
    target: message,
    onClose,
    ...props
}: ModalProps<"react_message">) {
    return (
        <Modal
            {...props}
            padding={false}
            maxWidth="370px"
        >
            <PickerContainer>
                <HackAlertThisFileWillBeReplaced
                    onSelect={(emoji) =>{
                        message.react(
                            emojiDictionary[
                                emoji as keyof typeof emojiDictionary
                            ] ?? emoji,
                        );
                        onClose();
                    }}
                    onClose={onClose}
                />
            </PickerContainer>
        </Modal>
    )
}
