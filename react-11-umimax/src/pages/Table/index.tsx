import services from '@/services/demo';
import {
    ActionType,
    FooterToolbar,
    PageContainer,
    ProDescriptions,
    ProDescriptionsItemProps,
    ProTable,
    ProColumns
} from '@ant-design/pro-components';
import {Button, Divider, Drawer, message} from 'antd';
import React, {useRef, useState} from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm, {FormValueType} from './components/UpdateForm';

const {addUser, queryUserList, deleteUser, modifyUser} =
    services.UserController;

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserInfo) => {
    const hide = message.loading('正在添加');
    try {
        await addUser({...fields});
        hide();
        message.success('添加成功');
        return true;
    } catch (error) {
        hide();
        message.error('添加失败请重试！');
        return false;
    }
};

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
    const hide = message.loading('正在配置');
    try {
        await modifyUser(
            {
                userId: fields.id || '',
            },
            {
                name: fields.name || '',
                nickName: fields.nickName || '',
                email: fields.email || '',
            },
        );
        hide();

        message.success('配置成功');
        return true;
    } catch (error) {
        hide();
        message.error('配置失败请重试！');
        return false;
    }
};

/**
 *  删除节点
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.UserInfo[]) => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;
    try {
        await deleteUser({
            userId: selectedRows.find((row) => row.id)?.id || '',
        });
        hide();
        message.success('删除成功，即将刷新');
        return true;
    } catch (error) {
        hide();
        message.error('删除失败，请重试');
        return false;
    }
};

const TableList: React.FC<unknown> = () => {
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] =
        useState<boolean>(false);
    const [stepFormValues, setStepFormValues] = useState({});
    const actionRef = useRef<ActionType>();
    const [row, setRow] = useState<API.UserInfo>();
    const [selectedRowsState, setSelectedRows] = useState<API.UserInfo[]>([]);
    const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
        {
            title: '名称',
            dataIndex: 'name',
            tip: '名称是唯一的 key',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '名称为必填项',
                    },
                ],
            },
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            valueType: 'text',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            hideInForm: true,
            valueEnum: {
                0: {text: '男', status: 'MALE'},
                1: {text: '女', status: 'FEMALE'},
            },
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => (
                <>
                    <a
                        onClick={() => {
                            handleUpdateModalVisible(true);
                            setStepFormValues(record);
                        }}
                    >
                        配置
                    </a>
                    <Divider type="vertical"/>
                    <a href="">订阅警报</a>
                </>
            ),
        },
    ];

    const columnsProColumn: ProColumns<API.UserInfo>[] = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name', // 表格需要明确的 key
            tip: '名称是唯一的 key',
            // 移除了 formItemProps，表格列中不需要这个
            // 如果需要在表格搜索表单中使用，使用 fieldProps 代替
            fieldProps: {
                rules: [
                    {
                        required: true,
                        message: '名称为必填项',
                    },
                ],
            },
            // 表格特有属性
            sorter: true, // 添加排序功能
            hideInSearch: false, // 在搜索表单中显示
            filters: [ // 添加筛选功能
                {text: '用户A', value: 'userA'},
                {text: '用户B', value: 'userB'},
            ],
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName',
            valueType: 'text',
            sorter: true,
            hideInSearch: false,
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            // 移除了 hideInForm，表格中使用 hideInTable 或 hideInSearch
            hideInTable: false, // 控制在表格中是否隐藏
            hideInSearch: true, // 控制在搜索表单中是否隐藏（性别通常用下拉筛选而不是搜索）
            valueEnum: {
                0: {text: '男', status: 'MALE'},
                1: {text: '女', status: 'FEMALE'},
            },
            // 表格特有的筛选配置
            filters: [
                {text: '男', value: 0},
                {text: '女', value: 1},
            ],
            // 筛选表单中的配置
            valueType: 'select',
        },
        {
            title: '操作',
            key: 'option', // 操作列通常用固定的 key
            valueType: 'option',
            // 移除了 dataIndex，操作列通常没有对应的数据字段
            // 表格操作列需要指定宽度和固定位置
            width: 120,
            fixed: 'right',
            render: (_, record) => (
                <>
                    <a
                        onClick={() => {
                            handleUpdateModalVisible(true);
                            setStepFormValues(record);
                        }}
                    >
                        配置
                    </a>
                    <Divider type="vertical"/>
                    <a href="">订阅警报</a>
                </>
            ),
        },
    ];

    return (
        <PageContainer
            header={{
                title: 'CRUD 示例',
            }}
        >
            <ProTable<API.UserInfo>
                headerTitle="查询表格"
                actionRef={actionRef}
                rowKey="id"
                search={{
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => handleModalVisible(true)}
                    >
                        新建
                    </Button>,
                ]}
                request={async (params, sorter, filter) => {
                    const {data, success} = await queryUserList({
                        ...params,
                        // FIXME: remove @ts-ignore
                        // @ts-ignore
                        sorter,
                        filter,
                    });
                    return {
                        data: data?.list || [],
                        success,
                    };
                }}
                columns={columnsProColumn}
                rowSelection={{
                    onChange: (_, selectedRows) => setSelectedRows(selectedRows),
                }}
            />
            {selectedRowsState?.length > 0 && (
                <FooterToolbar
                    extra={
                        <div>
                            已选择{' '}
                            <a style={{fontWeight: 600}}>{selectedRowsState.length}</a>{' '}
                            项&nbsp;&nbsp;
                        </div>
                    }
                >
                    <Button
                        onClick={async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            actionRef.current?.reloadAndRest?.();
                        }}
                    >
                        批量删除
                    </Button>
                    <Button type="primary">批量审批</Button>
                </FooterToolbar>
            )}
            <CreateForm
                onCancel={() => handleModalVisible(false)}
                modalVisible={createModalVisible}
            >
                <ProTable<API.UserInfo, API.UserInfo>
                    onSubmit={async (value) => {
                        const success = await handleAdd(value);
                        if (success) {
                            handleModalVisible(false);
                            if (actionRef.current) {
                                actionRef.current.reload();
                            }
                        }
                    }}
                    rowKey="id"
                    type="form"
                    columns={columnsProColumn}
                />
            </CreateForm>
            {stepFormValues && Object.keys(stepFormValues).length ? (
                <UpdateForm
                    onSubmit={async (value) => {
                        const success = await handleUpdate(value);
                        if (success) {
                            handleUpdateModalVisible(false);
                            setStepFormValues({});
                            if (actionRef.current) {
                                actionRef.current.reload();
                            }
                        }
                    }}
                    onCancel={() => {
                        handleUpdateModalVisible(false);
                        setStepFormValues({});
                    }}
                    updateModalVisible={updateModalVisible}
                    values={stepFormValues}
                />
            ) : null}

            <Drawer
                width={600}
                open={!!row}
                onClose={() => {
                    setRow(undefined);
                }}
                closable={false}
            >
                {row?.name && (
                    <ProDescriptions<API.UserInfo>
                        column={2}
                        title={row?.name}
                        request={async () => ({
                            data: row || {},
                        })}
                        params={{
                            id: row?.name,
                        }}
                        columns={columns}
                    />
                )}
            </Drawer>
        </PageContainer>
    );
};

export default TableList;
