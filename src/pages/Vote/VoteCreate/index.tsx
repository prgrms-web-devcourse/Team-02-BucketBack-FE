import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  CommonButton,
  CommonDrawer,
  CommonImage,
  CommonText,
  CommonTextarea,
  Header,
} from '@/shared/components';
import { useCustomToast, useDrawer } from '@/shared/hooks';
import { FormContainer, Wrapper, TextareaWrapper, RadioBox, SelectedItems } from './style';
import HobbySelector from '@/features/hobby/components/HobbySelector';
import { SelectedItem } from '@/features/inventory/service';
import { VoteSelectItem } from '@/features/vote/components';
import { useCreateVote } from '@/features/vote/hooks';

interface Textarea {
  textarea: string;
}
interface Hobby {
  english: string;
  hangul: string;
}

const VoteCreate = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby>({ english: '', hangul: '' });
  const [prevSelectedHobby, setPrevSelectedHobby] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const { mutate: CreateVoteMutate } = useCreateVote();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Textarea>();
  const { isOpen, onOpen, onClose } = useDrawer();
  const openToast = useCustomToast();

  const onSubmit: SubmitHandler<Textarea> = (data) => {
    if (selectedHobby.english === prevSelectedHobby) {
      CreateVoteMutate({
        hobby: selectedHobby.hangul,
        content: data.textarea,
        item1Id: Number(selectedItems[0].id),
        item2Id: Number(selectedItems[1].id),
      });
    } else {
      openToast({
        type: 'error',
        message: `${selectedHobby.hangul}취미에 맞는 아이템을 선택해주세요.`,
      });
    }
  };

  return (
    <>
      <Header type="back" />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <CommonText type="normalTitle" noOfLines={0}>
            투표 생성하기
          </CommonText>
        </Wrapper>
        <Wrapper>
          <CommonText type="normalInfo" noOfLines={0}>
            취미를 선택해주세요.
          </CommonText>
          <RadioBox>
            <HobbySelector onChange={setSelectedHobby} />
          </RadioBox>
        </Wrapper>
        <Wrapper>
          <CommonText type="normalInfo" noOfLines={0}>
            아이템을 두개 선택해주세요.
          </CommonText>
          {selectedItems.length <= 1 ? (
            <CommonButton
              type="custom"
              onClick={() => {
                !selectedHobby.english
                  ? openToast({ type: 'info', message: '취미를 선택해주세요.' })
                  : onOpen();
              }}
            />
          ) : (
            <SelectedItems>
              {selectedItems.map(({ id, src }) => (
                <CommonImage
                  key={id}
                  src={src}
                  size="sm"
                  onClick={() => {
                    onOpen();
                    setSelectedItems([]);
                  }}
                />
              ))}
            </SelectedItems>
          )}
        </Wrapper>
        <TextareaWrapper>
          <CommonTextarea
            placeholder="투표 내용을 입력해주세요."
            size="sm"
            label="투표 내용"
            error={errors.textarea}
            {...register('textarea', {
              required: '내용을 필수로 입력해주세요.',
              maxLength: {
                value: 1000,
                message: '최대 1000자 이하로 입력해주세요.',
              },
            })}
          />
          <CommonButton
            type="mdFull"
            isSubmit={true}
            isDisabled={!selectedItems.length || !selectedHobby.english}
          >
            생성 완료
          </CommonButton>
        </TextareaWrapper>
      </FormContainer>
      <CommonDrawer
        isOpen={isOpen}
        onClose={() => {
          setSelectedItems([]);
          onClose();
        }}
        onClickFooterButton={() => {
          setPrevSelectedHobby(selectedHobby.english);
          onClose();
        }}
        isFull={true}
        footerButtonText="선택 완료"
        isDisabled={selectedItems.length <= 1}
      >
        <VoteSelectItem
          onChange={setSelectedItems}
          selectedItems={selectedItems}
          selectedHobby={selectedHobby.english}
        />
      </CommonDrawer>
    </>
  );
};

export default VoteCreate;
