USE [inventory]
GO
/****** Object:  Table [dbo].[Mst_Agriculture_Form]    Script Date: 27-10-2020 23:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Mst_Agriculture_Form](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](255) NULL,
	[LastName] [varchar](255) NULL,
	[DOB] [varchar](255) NULL,
	[PanNo] [varchar](255) NULL,
	[AadharNo] [varchar](255) NULL,
	[MobileNo] [varchar](255) NULL,
	[EmailId] [varchar](255) NULL,
	[Address] [varchar](255) NULL,
	[Gaon] [varchar](255) NULL,
	[Taluka] [varchar](255) NULL,
	[District] [varchar](255) NULL,
	[State] [varchar](255) NULL,
	[PinCode] [varchar](255) NULL,
	[AreaGuntha] [varchar](255) NULL,
	[Well] [varchar](255) NULL,
	[WaterLevelPerYear] [varchar](255) NULL,
	[CropType] [varchar](255) NULL,
	[NoOfTimesInYear] [varchar](255) NULL,
	[MajorCrop] [varchar](255) NULL,
	[SmallCropArea] [varchar](255) NULL,
	[MajorCropOutput] [varchar](255) NULL,
	[SmallCropOutput] [varchar](255) NULL,
	[LiveStock] [varchar](255) NULL,
	[Tractor] [varchar](255) NULL,
	[Make] [varchar](255) NULL,
	[Model] [varchar](255) NULL,
	[YearOfPurchase] [varchar](255) NULL,
	[Capacity] [varchar](255) NULL,
	[Trollies] [varchar](255) NULL,
	[PermanentLabour] [varchar](255) NULL,
	[TemporaryLabour] [varchar](255) NULL,
	[Fpo] [varchar](255) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[Mst_InsertAgicultureForm]    Script Date: 27-10-2020 23:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Mst_InsertAgicultureForm](
@Fpo varchar(255),
@FirstName varchar(255),@LastName varchar(255),@DOB varchar(255),@PanNo varchar(255),
@AadharNo varchar(255),@MobileNo varchar(255),@EmailId varchar(255),@Address varchar(255),
@Gaon varchar(255),@Taluka varchar(255),@District varchar(255),@State varchar(255),
@PinCode varchar(255),@AreaGuntha varchar(255),@Well varchar(255),@WaterLevelPerYear varchar(255),
@CropType varchar(255),@NoOfTimesInYear varchar(255),@MajorCrop varchar(255),
@SmallCropArea varchar(255),@MajorCropOutput varchar(255),@SmallCropOutput varchar(255),
@LiveStock varchar(255),@Tractor varchar(255),@Make varchar(255),@Model varchar(255),
@YearOfPurchase varchar(255),@Capacity varchar(255),@Trollies varchar(255),
@PermanentLabour varchar(255),@TemporaryLabour varchar(255)
) AS
BEGIN
INSERT INTO Mst_Agriculture_Form(Fpo,FirstName,LastName,DOB,PanNo,AadharNo,MobileNo,EmailId,
Address,Gaon,Taluka,
District,State,PinCode,AreaGuntha,Well,
WaterLevelPerYear,CropType,NoOfTimesInYear,MajorCrop,SmallCropArea,MajorCropOutput,
SmallCropOutput,LiveStock,Tractor,Make,Model,YearOfPurchase,Capacity,Trollies,PermanentLabour,TemporaryLabour)
VALUES(@Fpo,@FirstName,@LastName,@DOB,@PanNo,@AadharNo,@MobileNo,@EmailId,
@Address,@Gaon,
@Taluka,@District,
@State,@PinCode,@AreaGuntha,@Well,@WaterLevelPerYear,@CropType,
@NoOfTimesInYear,@MajorCrop,@SmallCropArea,@MajorCropOutput,
@SmallCropOutput,@LiveStock,@Tractor,@Make,@Model,@YearOfPurchase,@Capacity,@Trollies,@PermanentLabour,@TemporaryLabour);
END

GO
