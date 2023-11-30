import React from 'react';
import styled from "styled-components";
import SectionLine from "../components/SectionLine";
import vids from '../vids.mp4'
const Code = () => {
    const installCode = `git clone https://github.com/saaresearch/ODRS.git\ncd ODRS/\npip install -r requirements.txt `
    const dir1 = `user_datasets
|_ _yolo
\t|_ _ <folder_name_your_dataset>
\t\t|_ _train
\t\t\t|_ _images
\t\t\t\t|_ <name_1>.jpg
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.jpg
\t\t\t|_ _labels
\t\t\t\t|_ <name_1>.txt
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.txt
\t\t|_ _valid
\t\t\t|_ _images
\t\t\t\t|_ <name_1>.jpg
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.jpg
\t\t\t|_ _labels
\t\t\t\t|_ <name_1>.txt
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.txt
\t\t|_ _test
\t\t\t|_ _images
\t\t\t\t|_ <name_1>.jpg
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.jpg
\t\t\t|_ _labels
\t\t\t\t|_ <name_1>.txt
\t\t\t\t|_ ...
\t\t\t\t|_ <name_N>.txt`
    const dir2 =
`user_datasets
|_ _yolo
\t|_ _ <folder_name_your_dataset>
\t\t|_ <name_1>.jpg
\t\t|_ ...
\t\t|_ <name_N>.jpg
\t\t|_ ...
\t\t|_ <name_1>.txt
\t\t|_ ...
\t\t|_ <name_N>.txt`
    const dir3 =
`boat
car
dock
jetski
lift`
    const cfg_yml =
`#dataset_path: path to data folder
#classes_path: path to classes.txt
#GPU: True/False
#speed: 1 - 5 if you want max speed choose 5. For lower speed 1
#accuracy: 1 - 10 if you want max accuracy choose 10. For lower accuracy 1


GPU: true
accuracy: 10
classes_path: classes.txt
dataset_path: /media/farm/ssd_1_tb_evo_sumsung/ODRS/user_datasets/yolo/plant
speed: 1 `
    const cfg_yml2 =
`#  Name *.txt file with names classes
CLASSES: classes.txt

 # This file generated automaticaly
CONFIG_PATH: dataset.yaml

# Path to data
DATA_PATH: /media/farm/ssd_1_tb_evo_sumsung/ODRS/user_datasets/yolo/plant

EPOCHS: 2
IMG_SIZE: 300

# MODEL ZOO:
# ["yolov5l", "yolov5m", "yolov5n", "yolov5s", "yolov5x",
#  "yolov7x", "yolov7", "yolov7-tiny", #"yolov8x6", "yolov8x",
#  "yolov8s", "yolov8n", "yolov8m", "faster-rcnn", "ssd"]

# **NOTE**: For successful training of the ssd model, the size of your images should not exceed 512x512

MODEL: ssd


# For multiprocessing.
# For CPU:
#       GPU_COUNT: 0
#       SELECT_GPU: cpu

GPU_COUNT: 2
SELECT_GPU: 0,1

# parameters for autosplit dataset
SPLIT_TEST_VALUE: 0.05
SPLIT_TRAIN_VALUE: 0.6
SPLIT_VAL_VALUE: 0.35`

    const handleCopy = (e) => {
        const button = e.currentTarget;
        const parentBlock = button.parentNode;

        const codeBlock = parentBlock.querySelector('pre');

        if (codeBlock) {
            const text = codeBlock.textContent;
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            button.style.display = 'none';
            setTimeout(()=>{
                button.style.display = 'block';
            }, 1500)

        }

    }

    return (
        <Wrapper>
            <Container>
                <p>Download repository and install the necessary dependencies using the following commands:</p>
                <CodeBlock>
                    <pre>
                        {installCode}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <SectionLine text={'Dataset structure'}/>
                <p>To use the recommendation system or train the desired detector, put your dataset in yolo format in the <strong>user_datasets/yolo directory</strong>. The set can have the following structures:</p>
                <CodeBlock style={{marginBottom: '10px'}}>
                    <pre>
                        {dir1}
                    </pre>
                </CodeBlock>
                <p>or you can use the following structure, then your set will be automatically divided into samples:</p>
                <CodeBlock>
                    <pre>
                        {dir2}
                    </pre>
                </CodeBlock>

                <p>Add to the root directory of the project <strong>.txt</strong> a file containing the names of all classes in your set of images.</p>
                <p>Example <strong>classes.txt</strong>:</p>
                <CodeBlock>
                    <pre>
                        {dir3}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>
                <SectionLine text={'ML Recommendation system'}/>
                <p>After you have placed your dataset in the folder <strong>user_datasets/yolo</strong> and created in the root directory <strong>.txt</strong> a file containing the names of all classes in your set of images. You can start working with the main functionality of the project.</p>
                <br/>
                <p>In order to use the recommendation system, you need to configure<strong>ml_config.yaml.</strong> Go to the desired directory:</p>
                <CodeBlock>
                    <pre>
                       cd ODRS/ml_utils/config/
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Open <strong>ml_config.yaml</strong> and set the necessary parameters and paths:</p>
                <CodeBlock>
                    <pre>
                      {cfg_yml}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>
                <SectionLine text={'Detectors Training'}/>
                <p>Go to the script <strong>ml_model_optimizer.py</strong> and start it:</p>
                <CodeBlock>
                    <pre>
                      {`cd ..\npython ml_model_optimizer.py`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>If everything worked successfully, you will see something like the following answer:</p>
                <CodeBlock>
                    <pre>
                      {`Number of images: 1016\nW: 800\nH: 600\nGini Coefficient: 64.0\nNumber of classes: 5\nTop models for training:\n1) yolov5x\n2) yolov5l\n3) yolov8x6`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Go to the directory containing <strong>custom_config.yaml</strong> in which the training parameters are specified.</p>
                <br/>
                <p>Setting up training parameters:</p>
                <CodeBlock>
                    <pre>
                        {cfg_yml2}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Starting training: <strong>NOTE</strong>: If, for example, you specified in <strong>custom_config.yaml</strong>, the path to the yolov5 model, and you want to start yolov8, training will not start.</p>
                <CodeBlock>
                    <pre>
                        {`cd ODRS/ODRS/train_utils/train_model\npython custom_train_all.py`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>After the training, you will see in the root directory <strong>ODRS</strong> a new directory <strong>runs</strong>, all the results of experiments will be saved in it. For convenience, the result of each experiment is saved in a separate folder in the following form:</p>
                <CodeBlock>
                    <pre>
                        {`<year>-<mounth>-<day>_<hours>-<minutes>-<seconds>_<model_name>\n|_ _exp\n\t|_...`}
                    </pre>
                </CodeBlock>
                <SectionLine text={'Using the API'}/>

                <p>To use the project in your code, you can use the built-in Api. You can see full examples of using the API here: <a href="https://github.com/saaresearch/ODRS/blob/master/examples/api_example.ipynb" target={'_blanc'}>Example API</a>.</p>
                <br/>
                <p>Initializing a task:</p>
                <CodeBlock>
                    <pre>
                        {`from ODRS.ODRS.api.ODRS import ODRS\n#init object with parameters\nodrs = ODRS(job="object_detection", data_path = 'full_data_path', classes = "classes.txt",\n\timg_size = "512", batch_size = "25", epochs = "300",\n\tmodel = 'yolov8x6', gpu_count = 1, select_gpu = "0", config_path = "dataset.yaml",\n\tsplit_train_value = 0.6, split_test_value = 0.35, split_val_value = 0.05)`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Starting training:</p>
                <CodeBlock>
                    <pre>
                        {`from ODRS.ODRS.api.ODRS import ODRS\nodrs.fit()`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Getting results:</p>
                <CodeBlock>
                    <pre>
                        {`!yolo val detect data=path_to_data device=0 model=ODRS/runs/path_to_experiment/best.pt`}
                    </pre>
                    <CopyBtn onClick={(e) => handleCopy(e)}>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path
                                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                            <path
                                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                    </CopyBtn>
                    <SuccessBtn>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                    </SuccessBtn>
                </CodeBlock>

                <p>Example results:</p>
                <Images>
                    <img src="https://github.com/saaresearch/ODRS/raw/master/docs/img/example_train.png" alt="first"/>
                    <img src="https://github.com/saaresearch/ODRS/raw/master/docs/img/val_labels.jpg" alt="second"/>
                </Images>
                <p>This project is actively used in testing new models and datasets in Insystem for classification and detection of garbage.</p>
                <br/>
                <video src={vids} autoPlay="autoplay" loop muted defaultMuted playsinline/>
                <SectionLine text={'Our team'}/>
                <PhotoWrapper>
                    <PhotoContainer>
                        <img src="" alt=""/>
                    </PhotoContainer>
                    <PhotoContainer>
                        <img src="" alt=""/>
                    </PhotoContainer>

                    <PhotoContainer>
                        <img src="" alt=""/>
                    </PhotoContainer>
                    <PhotoContainer>
                        <img src="" alt=""/>
                    </PhotoContainer>
                </PhotoWrapper>
            </Container>
        </Wrapper>
    );
};

export default Code;
const PhotoWrapper = styled.div`
  display: flex;
  gap: 30px;
  //flex-wrap: wrap;
`
const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    justify-content: center;
    align-items: center;
  img {
     width: 100%;
    height: 200px;
    border-radius: 100%;
    border: 4px solid gray;
  }
`

const SuccessBtn = styled.button`
  background: #464545;
  border: 1px solid #57c257;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  z-index: 0;

  svg {
    fill: #57c257;
  }
`
const CopyBtn = styled.button`
  z-index: 1;
  background: #464545;
  border: 1px solid gray;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  transition: all 0.3s ease;
  svg {
    transition: all 0.3s ease;
    fill: gray;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid white;
    svg {
      fill: white;
    }
  }
`

const Container = styled.div`
  padding: 15px;
  width: 100%;
  max-width: 940px;
  video {
    width: 100%;
  }
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`
const Images = styled.div`
  padding: 15px 0;
  display: flex;
  gap: 15px;
  img {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`
const CodeBlock = styled.div`
  position: relative;
  margin-top: 15px;
  padding: 16px 16px 16px 16px;
  border-radius: 6px;
  background: rgb(45, 45, 45);
  width: 100%;
  margin-bottom: 30px;
  overflow-x: scroll;
  pre {
    line-height: 24px;
    word-break: normal;
    word-wrap: normal;
    font-family: 'Fira Code', monospace;
    overflow: scroll;
  }
  
`

const Wrapper = styled.div`
    width: 100%;
    background: black;
    padding: 0 70px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 18px;
      line-height: 30px;
      color: rgb(229, 229, 229);
    }
  @media (max-width: 768px) {
    padding: 0 25px 60px;
    p {
      font-size: 16px;
    }
  }
`