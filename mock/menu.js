/*
 * @Author: XiaohuBai
 * @Date: 2020-11-24 15:15:18
 * @LastEditors: XiaohuBai
 * @LastEditTime: 2020-11-24 15:52:03
 * @Description: 描述
 */

module.exports = [

  // user listMenu
  {
    url: '/listMenu',
    type: 'get',
    response: config => {
      return {
        code: 200,
        msg: 'success',
        requestId: '7650c5f0-3703-4be4-a573-5fa11456800d',
        data: [
          {
            RoleId: 0,
            action: '无',
            breadcrumb: '',
            component: 'Layout',
            createBy: '1',
            createdAt: '2020-04-11T15:52:48+08:00',
            dataScope: '',
            deletedAt: null,
            icon: 'example',
            isFrame: '0',
            is_select: false,
            menuId: 2,
            menuName: 'Upms',
            menuType: 'M',
            noCache: true,
            params: '',
            parentId: 0,
            path: '/upms',
            paths: '/0/2',
            permission: '',
            sort: 1,
            title: '系统管理',
            updateBy: '1',
            updatedAt: '0001-01-01T00:00:00Z',
            visible: '0',
            children: [
              {
                RoleId: 0,
                action: '无',
                breadcrumb: '',
                children: [],
                component: '/menu/index',
                createBy: '',
                createdAt: '2020-04-11T15:52:48+08:00',
                dataScope: '',
                deletedAt: null,
                icon: 'tree-table',
                isFrame: '',
                is_select: false,
                menuId: 51,
                menuName: 'Menu',
                menuType: 'C',
                noCache: true,
                params: '',
                parentId: 2,
                path: 'menu',
                paths: '',
                permission: 'system:sysmenu:list',
                sort: 3,
                title: '菜单管理',
                updateBy: '',
                updatedAt: '0001-01-01T00:00:00Z',
                visible: '0'
              }
            ]
          },
          {
            RoleId: 0,
            action: '无',
            breadcrumb: '',
            component: 'Layout',
            createBy: '1',
            createdAt: '2020-08-03T09:17:37+08:00',
            dataScope: '',
            deletedAt: null,
            icon: 'time-range',
            isFrame: '0',
            is_select: false,
            menuId: 459,
            menuName: 'sys_job管理',
            menuType: 'M',
            noCache: false,
            params: '',
            parentId: 0,
            path: '/sys_job',
            paths: '/0/459',
            permission: '',
            sort: 2,
            title: '定时任务',
            updateBy: '1',
            updatedAt: '2020-08-09T01:27:11+08:00',
            visible: '0',
            children: [
              {
                RoleId: 0,
                action: '',
                breadcrumb: '',
                children: [],
                component: '/sysjob/log',
                createBy: '',
                createdAt: '2020-08-05T21:24:46+08:00',
                dataScope: '',
                deletedAt: null,
                icon: 'bug',
                isFrame: '',
                is_select: false,
                menuId: 471,
                menuName: 'job_log',
                menuType: 'C',
                noCache: false,
                params: '',
                parentId: 459,
                path: 'job_log',
                paths: '',
                permission: '',
                sort: 0,
                title: '日志',
                updateBy: '',
                updatedAt: '0001-01-01T00:00:00Z',
                visible: '1'
              },
              {
                RoleId: 0,
                action: '无',
                breadcrumb: '',
                children: [],
                component: '/sysjob/index',
                createBy: '',
                createdAt: '2020-08-03T09:17:37+08:00',
                dataScope: '',
                deletedAt: null,
                icon: 'tool',
                isFrame: '',
                is_select: false,
                menuId: 460,
                menuName: 'sys_job管理',
                menuType: 'C',
                noCache: false,
                params: '',
                parentId: 459,
                path: 'sys_job',
                paths: '',
                permission: 'sysjob:sysjob:list',
                sort: 0,
                title: '定时任务',
                updateBy: '',
                updatedAt: '0001-01-01T00:00:00Z',
                visible: '0'
              }
            ]
          }
        ]
      }
    }
  }
]
