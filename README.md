# quant-ui-react

quant-ui is a collection of React components designed for building user interfaces with consistent styles and behaviors.

## Installation

```console
npm install quant-ui-react
# or
yarn add quant-ui-react
```

## Components

### Checkbox

#### Props

| Name           | Type                   | Default Value | Description                                      |
| -------------- | ---------------------- | ------------- | ------------------------------------------------ |
| variantSize    | "sm", "md", "lg", "xl" | "md"          | Specifies the size of the checkbox.              |
| label          | string                 | None          | Label text for the checkbox.                     |
| isLabel        | boolean                | false         | Specifies whether to show the label text or not. |
| labelClassName | string                 | None          | Additional CSS classes for the label text.       |


### Button

#### Props

| Name        | Type                                      | Default Value | Description                                              |
| ----------- | ----------------------------------------- | ------------- | -------------------------------------------------------- |
| variant     | "default", "danger", "warning", "success" | "default"     | Specifies the size of the button.                        |
| variantSize | "default", "sm", "lg", "icon"             | "default"     | Specifies the size of the button.                        |
| asChild     | boolean                                   | false         | Specifies if the button is a child of another component. |


### Input

#### Props

| Name    | Type                   | Default Value | Description                               |
| ------- | ---------------------- | ------------- | ----------------------------------------- |
| variant | "outlined", "standard" | "outlined"    | Specifies the variant of the input field. |
| label   | string                 | None          | Label text for the input field.           |
| type    | "text", "password"     | "text"        | Specifies the type of input field.        |


### Modal

#### Props

| Name    | Type       | Default Value | Description                                    |
| ------- | ---------- | ------------- | ---------------------------------------------- |
| isOpen  | boolean    | false         | Specifies whether the modal is open or closed. |
| onClose | () => void | None          | Callback function to close the modal.          |


### Seekbar

#### Props

| Name          | Type             | Default Value | Description                   |
| ------------- | ---------------- | ------------- | ----------------------------- |
| accentColor   | string           | "#3B82F6"     | Color of the seekbar thumb.   |
| progressColor | string           | "#3B82F6"     | Color of the progress bar.    |
| seekbarColor  | string           | "#D1D5DB"     | Color of the seekbar bar.     |
| value         | string           | None          | Current value of the seekbar. |
| max           | number or string | 100           | Maximum value of the seekbar. |
| min           | number or string | 0             | Minimum value of the seekbar. |


### InputOtp

#### Props

| Name        | Type                      | Default Value | Description                                            |
| ----------- | ------------------------- | ------------- | ------------------------------------------------------ |
| elements    | number                    | 6             | Specifies the number of input boxes                    |
| variant     | "sm" , "md" , "lg" , "xl" | "md"          | Specifies the variant of the input field.              |
| onOtpChange | (values: string) => void  | -             | Callback function triggered when the OTP values change |


## Avatar

### Props

| Name        | Type                   | Default Value                                                 | Description                                                                     |
| ----------- | ---------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| src         | string                 |                                                               | Specifies the source URL of the image.                                          |
| alt         | string                 |                                                               | Specifies the alternate text for the image.                                     |
| variantSize | "sm", "md", "lg", "xl" | "md"                                                          | Specifies the size variant of the avatar.                                       |
| fallbackSrc | string                 | "[default-fallback-image.jpg](https://github.com/shadcn.png)" | Specifies the fallback image URL if the `src` is not provided or fails to load. |

## Badge

### Props

| Name    | Type                                             | Default Value | Description                                |
| ------- | ------------------------------------------------ | ------------- | ------------------------------------------ |
| variant | "default", "secondary", "destructive", "outline" | "default"     | Specifies the visual variant of the badge. |

## Toast

### Props

| Name         | Type          | Default Value | Description                                       |
| ------------ | ------------- | ------------- | ------------------------------------------------- |
| position     | ToastPosition |               | Specifies the position of the toast.              |
| duration     | number        | 2000          | Duration in milliseconds for the toast to show.   |
| reverseOrder | boolean       | false         | Specifies whether to reverse the order of toasts. |
| gutter       | number        | 8             | Space between toasts in pixels.                   |

## ToastTrigger

### Props

| Name                  | Type                                     | Default Value     | Description                                                  |
| --------------------- | ---------------------------------------- | ----------------- | ------------------------------------------------------------ |
| cta                   | string                                   |                   | Text displayed in the toast trigger button.                  |
| typeOfToast           | "default", "success", "error", "promise" | "default"         | Type of toast triggered when the button is clicked.          |
| promiseLoadingText    | string                                   | "Saving..."       | Text displayed when the promise is in loading state.         |
| promiseLoadingSuccess | string                                   | "Saved!"          | Text displayed when the promise resolves successfully.       |
| promiseLoadingError   | string                                   | "Could not save." | Text displayed when the promise fails to resolve.            |
| promiseFn             | () => Promise<any>                       |                   | Function returning a promise to handle 'promise' type toast. |

## BarLoader

### Props

| Name | Type   | Default Value | Description                       |
| ---- | ------ | ------------- | --------------------------------- |
| size | number | 45            | Specifies the size of the loader. |

## DotLoader

### Props

| Name | Type   | Default Value | Description                       |
| ---- | ------ | ------------- | --------------------------------- |
| size | number | 45            | Specifies the size of the loader. |

## SpinnerLoader

### Props

| Name  | Type   | Default Value | Description                        |
| ----- | ------ | ------------- | ---------------------------------- |
| size  | number | 45            | Specifies the size of the loader.  |
| color | string | "#000"        | Specifies the color of the loader. |

## Radio

### Props

| Name           | Type                   | Default Value | Description                                      |
| -------------- | ---------------------- | ------------- | ------------------------------------------------ |
| accentColor    | string                 | "#000"        | Specifies the accent color of the radio button.  |
| isLabel        | boolean                | false         | Specifies whether to show the label text or not. |
| label          | string                 | None          | Label text for the radio button.                 |
| labelClassName | string                 | None          | Additional CSS classes for the label text.       |
| variantSize    | "sm", "md", "lg", "xl" | "md"          | Specifies the size of the radio button.          |


## AccordionItem


### Props

| Name    | Type                   | Default Value | Description                                                              |
| ------- | ---------------------- | ------------- | ------------------------------------------------------------------------ |
| isOpen  | boolean                | None          | Specifies whether the AccordionItem content should be visible or hidden. |
| content | string \| ReactElement | None          | The content to display within the AccordionItem when it is expanded.     |


## AccordionTrigger

### Props

| Name      | Type       | Default Value | Description                                                           |
| --------- | ---------- | ------------- | --------------------------------------------------------------------- |
| title     | string     | None          | The title or label displayed for the AccordionTrigger.                |
| isOpen    | boolean    | None          | Specifies whether the associated AccordionItem is currently expanded. |
| iconColor | string     | "black"       | The color of the icon displayed next to the title (if any).           |
| onOpen    | () => void | None          | Callback function triggered when the AccordionTrigger is clicked.     |





## Usage

```js
import { Button, CardComponent, Checkbox, Input, ModalComponent, Seekbar,Otp } from 'quant-ui';
import "quant-ui-react/dist/styles.css"

const { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } = CardComponent

const { ModalButton, ModalContent } = ModalComponent

// Example usage of Button component
<Button variant="default" variantSize="lg" onClick={handleClick}>Click me</Button>

// Example usage of Card component
 <Card>
    <CardHeader>
      <CardTitle>This is a Card Title</CardTitle>
      <CardDescription>This is a description of the card.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is the main content of the card.</p>
    </CardContent>
    <CardFooter>
      <p>Footer content goes here.</p>
    </CardFooter>
  </Card>

// Example usage of Checkbox component
<Checkbox isLabel label='Label Name' labelClassName='tailwind-class' />

// Example usage of Input component
<Input label="Username" type="text" />

// Example usage of Modal component
<Modal isOpen={isOpen} onClose={handleClose}>
 <ModalButton onOpen={openModal}>Open Modal</ModalButton>
  <ModalContent>{modalContent}</ModalContent>
</Modal>

// Example usage of Seekbar component
<Seekbar value={seekbarValue} max={100} min={0} />

// Example usage of Otp component
<Otp onOtpChange={handleOtpChange} ref={otpRef} elements={6} variant="md" />

// Example usage of Avatar component
<Avatar src="Image.png" alt="Profile picture" variantSize="md" />

// Example usage of Badge component
<Badge variant="default">Default</Badge>

// Example usage of Toast component
<>
  <Toast position="top-right" duration={3000} reverseOrder={false} gutter={8} />

    <ToastTrigger
      cta="This is a success toast!"
      typeOfToast="success"
    >
      Show Success Toast
    </ToastTrigger>

    <ToastTrigger
      cta="This is an error toast!"
      typeOfToast="error"
    >
      Show Error Toast
    </ToastTrigger>

    <ToastTrigger
      cta="Promise toast example"
      typeOfToast="promise"
      promiseLoadingText="Saving..."
      promiseLoadingSuccess="Settings saved!"
      promiseLoadingError="Could not save."
      promiseFn={mockApiCall}
    >
      Show Promise Toast
    </ToastTrigger>
<>

// Example usage of Spinner component
<>
  <SpinnerLoader size={45} color='#000' />
  <BarLoader size={45} />
  <DotLoader size={30} />
</>
<Radio variantSize='md' isLabel label='CTA' labelClassName='tailwind-class' accentColor='hex-code'  />

// Example usage of Accordion component
<>
  <Accordion className="tailwind-class">
    <AccordionTrigger
      variant='variant'
      iconColor='color'
      title={title}
      isOpen={isOpen}
      onOpen={onOpen}
      className="tailwind-class"
    />
    <AccordionItem
      isOpen={isOpen}
      content={content}
      className="tailwind-class"
    />
  </Accordion>
</>
```